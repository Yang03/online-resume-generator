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
 },
  {
   component: 'Contact',
   position: 'aside',
   title: '联系方式',
   defaultData: [
     {
       label: '手机号',
       value: 'xx',
     }, {
       label: '邮箱',
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
  },

  {
    component: 'Stack',
    position: 'aside',
    title: '技术栈',
    defaultData: [
     {
       value: '1.熟练使用google搜代码',
     }, {
       value: '2.熟练使用ctrlC, ctrlV'
     }
    ],
    schema: {
      type: "array",
      properties: [
        {
          value: {
            title: "技术",
            type: "string"
          }
        },
      ]
    }
  },
  {

    component: 'WorkExperience',
    position: 'main',
    title: '工作经历',
    defaultData: [
     {
       label: 'xxx公司(2019-now)',
       value: '职位: 前端</br>xxxxxx',
     }, {
       label: 'xxx公司(2018-2019)',
       value: ''
     }
    ],
    schema: {
      type: "array",
      properties: [
        {
          label: {
            title: "在职时间",
            type: "string"
          },
          value: {
            title: "技术",
            type: "string"
          }
        },
      ]
    }
  }
]
