var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/';


/***
 * 读取数据模块
 */
// data/read?type=it
router.get('/read', function (req, res, next) {
    var type = req.param('type') || '';
    fs.readFile(PATH + type + '.json', function (err, data) {
        var COUNT = 50; // 返回数据的长度
        if (err) {
            return res.send({
                status: 0,
                info: '读取文件异常'
            });
        }
        var obj = [];
        try {
            obj = JSON.parse(data.toString());
        } catch (e) {
            obj = [];
        }

        if (obj.length > COUNT) {
            obj = obj.slice(0, COUNT);
        }
        return res.send({
            status: 1,
            data: obj
        });
    })
});

/*******
 * 数据存储模块
 */
router.post('/write', function (req, res, next) {
    if (!req.session.user) {
        return res.send({
            status: 0,
            info: '未鉴权认证'
        });
    }
     // 文件名
     var type = req.param('type') || '';
    var data = req.body;
    // 关键字
    var url = data.url || '';
    var title = data.title || '';
    var img = data.img || '';
    // 文件路径
    var filePath = PATH + type + '.json';
    if (!type || !title || !url || !img) {
        return res.send({
            status: 0,
            info: '提交的字段不全'
        });
    }
    // 1）读取文件
    fs.readFile(PATH + type + '.json', function (err, data) {
        if (err) {
            return res.send({
                status: 0,
                info: '读取数据异常'
            });
        }
        var arr = [];
        try {
            arr = JSON.parse(data.toString());
        } catch (e) {
            arr = [];
        }
        // 2）写入文件
        // 写入每一条数据
        var writeData = {
            title: title,
            url: url,
            img: img,
            id: guidGenerate(),
            time: new Date()
        }
        arr.splice(0, 0, writeData);
        var newData = JSON.stringify(arr);
        fs.writeFile(filePath, newData, function (err) {
            if (err) {
                return res.send({
                    status: 0,
                    info: '写入文件失败'
                });
            }
            return res.send({
                status: 1,
                info: writeData
            })
        })
    })

});

/***
 * 阅读模块写入接口
 */
router.post('/write_config', function (req, res, next) {
    // TODO:后期提交数据的验证
    // 防xss攻击 npm i xss
    // require('xss)
    // var str = xss(string) xss校验
    var data = req.body.data;
    // try{}catch(e){}
    var obj = JSON.parse(data);
    var newData = JSON.stringify(obj);
    // 写入
    fs.writeFile(PATH + 'config.json', newData, function (err) {
        if (err) {
            return res.send({
                status: 0,
                info: '写入数据失败'
            });
        }
        return res.send({
            status: 1,
            info: obj
        })
    })

})

/***
 * 登录接口
 */
router.post('/login', function (req, res, next) {
    //用户名、密码、验证码
    var username = req.body.username;
    var password = req.body.password;

    //TODO ：对用户名、密码进行校验
    //xss处理、判空

    //密码加密 md5(md5(password + '随机字符串'))
    //密码需要加密－> 可以写入JSON文件
    if (username === 'admin' && password === '123456') {
        req.session.user = {
            username: username
        };
        return res.send({
            status: 1
        });
    }

    return res.send({
        status: 0,
        info: '登录失败'
    });
});

/**
 * 生GUID
 */
function guidGenerate() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

module.exports = router;
