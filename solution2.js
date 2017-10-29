// JavaScript source code
// 
//function show_image(src, width, height, alt)
func getPic(

var getPullURL= new XMLHttpRequest();
getPullURL.open("GET",{{mediaurl}}/ondemand/assets/{assetUid}/media?mediaType=
{mediaType1}&timestamp=1509234655000&page=1&size=1&sortBy=mediaLogID&sortDir=DESC, false)
)

var obj = json.parse('{
{
    "pollUrl": "https://ic-media-service.run.aws-usw02-pr.ice.predix.io/v2/mediastore/ondemand/getMedia/105c0125-021a-4da4-92cf-5c561f3776cf?page=0&size=100&sortBy=mediaLogId&sortDir=ASC",
    "noOfElements": 1
}
}')

public static var obj2 = obj.pollUrl;

getPullURL.XMLHttpRequest("GET", obj2, false);

var obj3 = json.parse('{(

    "status": "SUCCESS",
    "listOfEntries": {
        "content": [
            {
                "mediaType": "IMAGE",
                "mediaFileName": "CAM-HYP1071-F_1509061447000_10_IMAGE_jpg",
                "mediaTimestamp": 1509061447000,
                "assetUid": "CAM-HYP1071-F",
                "status": "SUCCESS",
                "url": "https://ic-media-service.run.aws-usw02-pr.ice.predix.io/v2/mediastore/file/CAM-HYP1071-F_1509061447000_10_IMAGE_jpg"
            }
        ],
        "last": true,
        "totalPages": 1,
        "totalElements": 1,
        "first": true,
        "numberOfElements": 1,
        "sort": null,
        "size": 1,
        "number": 0
)}')
//while is a loop
if(obj.3.status !==SUCCESS)
{
getPullURL.XMLHttpRequest("GET", obj2, false);
}
else if(obj.status="SUCCESS")
{
var obj4 = obj3.listOfEntries.content.url;
//return obj4;
}



function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = obj4;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

show_image(obj4, 600, 600, postcard);

