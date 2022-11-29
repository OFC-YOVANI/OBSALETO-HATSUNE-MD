const axios = require("axios")
const cheerio = require("cheerio")
const util = require("./util")
const qs = require("qs")

module.exports = fbDownloader = async (url)=>{
    return new Promise((resolve, reject)=>{
        var data = qs.stringify({
            'q': url
        });
        var config = {
            method: 'post',
            url: 'https://fdownloader.net/api/ajaxSearch',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded', 
            },
            data : data
        };

        axios(config).then(function (response) {
            let $ = cheerio.load(response.data.data), download = []
            $("#fbdownloader > div.tab-wrap > div:nth-child(5) > table > tbody > tr").each(function (i, elem){
                let trElement = $(elem)
                let tds = trElement.children()
                let quality = $(tds[0]).text().trim(), url = $(tds[2]).children("a").attr("href")
                if(url != undefined){
                    download.push({
                        quality,
                        url
                    })
                }
            })
            
            resolve({
                success:true,
                video_length: util.convertTime($("div.clearfix > p").text().trim()),
                download
            })
        }).catch(()=> {
            reject({
                success:false,
            })
        })
    })
    
}


