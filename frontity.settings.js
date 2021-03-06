const settings = {
  "name": "web-blog-gadewadee",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "พอดีต่อใจ",
      "description": "แหล่งรวมความรู้การตลาดและการจัดการดี ๆ ให้คนคิดดีมาเรียนรู้จากกัน"
    }
  },
  "packages": [
    {
      "name": "@frontity/pordee-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "ทั้งหมด",
              "/"
            ],
            [
              "เริ่มต้นที่นี่",
              "/category/เริ่มต้นที่นี่/"
            ],
            [
              "การตลาดที่ดี",
              "/category/การตลาดที่ดี/"
            ],
            [
              "การบริการที่ดี",
              "/category/การบริการที่ดี/"
            ],
            [
              "การจัดการที่ดี",
              "/category/การจัดการที่ดี/"
            ],
            /* Dropdown */
            [
              "อาหารและเครื่องดื่ม",
              "/category/อาหารและเครื่องดื่ม/"
            ],
            [
              "สินค้าเกษตร",
              "/category/สินค้าเกษตร/"
            ],
            [
              "งานคราฟท์",
              "/category/งานคราฟท์/"
            ],
            [
              "ท่องเที่ยว",
              "/category/ท่องเที่ยว/"
            ],
            [
              "อื่น ๆ",
              "/category/อื่น ๆ/"
            ],
          ]
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://testwpapigadewadee.wordpress.com/",
          "params": {
            "per_page": 9
          }
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
