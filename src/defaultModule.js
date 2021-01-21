export default [
  {
    component: 'Avatar',
    position: 'aside',
    defaultData: {
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGNens_IGL9MqtOmRCvPhC2fbq4Mkra_OQNjT_L88N2TyviO0g',
    },
    schema: {
     type: "object",
     properties: {
       image: {
         title: "头像",
         type: "string"
       }
      }
    }
  },
  {
    component: 'UserInfo',
    position: 'aside',
    title: '基本信息',
    defaultData: [
      {
        label: '姓名',
        value: 'xx',
      }, {
        label: '性别',
        value: 'xx',
      }
    ],
    schema: {
     type: "array",
     properties: [
       {
         label: {
           title: "标题",
           type: "string"
         }
       },
       {
         value: {
           title: "内容",
           type: "string"
         }
       }
     ]
   }
  }
]
