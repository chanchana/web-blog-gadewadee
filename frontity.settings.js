const settings = {
  "name": "web-blog-gadewadee",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
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
              "การบริหารที่ดี",
              "/category/การบริหารที่ดี/"
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
            // [
            //   "About Us",
            //   "/about-us/"
            // ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://testwpapigadewadee.wordpress.com/",
          "params": {
            "per_page": 1
          }
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
