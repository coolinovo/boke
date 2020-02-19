<template>
  <div id="home">

  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: 'home',
    data() {
      return {
        option: {
          baseOption: {
            title: {
              text: '霖の技术栈',
              subtext: 'coolin.club',
              x: 'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
              orient: 'vertical',
              left: 10,
              data: ['Vue', 'React', '小程序', 'Axios', 'Antd', 'Element ui', 'nodejs', 'express', 'mongodb', 'Vue + React']
            },
            series: [{
                name: '领域',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '30%'],
                label: {
                  position: 'inner'
                },
                labelLine: {
                  show: false
                },
                data: [{
                    value: 200,
                    name: 'UI',
                    selected: true
                  },
                  {
                    value: 400,
                    name: '后端',
                    selected: true
                  },
                  {
                    value: 800,
                    name: '前端'
                  }
                ]
              },
              {
                name: '技术占比',
                type: 'pie',
                radius: ['40%', '55%'],
                label: {
                  rich: {
                    b: {
                      fontSize: 15,
                      lineHeight: 20
                    },
                    per: {
                      color: '#fff',
                      backgroundColor: '#2c3e50',
                      padding: [2, 4],
                      borderRadius: 2
                    }
                  }
                },
                data: [{
                    value: 40,
                    name: 'Element ui'
                  },
                  {
                    value: 40,
                    name: 'Antd'
                  },
                  {
                    value: 40,
                    name: 'Bootstrap'
                  },
                  {
                    value: 40,
                    name: 'Element ui'
                  },
                  {
                    value: 40,
                    name: 'Uikit'
                  },
                  {
                    value: 170,
                    name: 'nodejs'
                  },
                  {
                    value: 130,
                    name: 'express'
                  },
                  {
                    value: 100,
                    name: 'mongodb'
                  },
                  {
                    value: 100,
                    name: 'React'
                  },
                  {
                    value: 200,
                    name: 'Vue'
                  },
                  {
                    value: 100,
                    name: 'ES6'
                  },
                  {
                    value: 100,
                    name: 'Axios'
                  },
                  {
                    value: 100,
                    name: 'jQuery'
                  },
                  {
                    value: 100,
                    name: 'fetch'
                  },
                  {
                    value: 100,
                    name: '小程序'
                  },
                ]
              }
            ]
          },
          media: [{
              query: {
                minWidth: 768
              },
              option: {
                legend: {
                  left: 10
                },
                series: [{},
                  {
                    label: {
                      formatter: '{b|{b} } {per|{d}%}  ',
                    }
                  }
                ]
              }
            },
            {
              query: {
                maxWidth: 480
              },
              option: {
                legend: {
                  orient: 'horizontal',
                  bottom: 10
                },
                series: [{},
                  {
                    label: {
                      formatter: '{b|{b} }',
                    },
                    data: [{
                        value: 100,
                        name: 'Antd'
                      },
                      {
                        value: 100,
                        name: 'Element ui'
                      },
                      {
                        value: 300,
                        name: 'nodejs'
                      },
                      {
                        value: 100,
                        name: 'mongodb'
                      },
                      {
                        value: 400,
                        name: 'Vue + React'
                      },
                      {
                        value: 200,
                        name: 'ES6'
                      },
                      {
                        value: 200,
                        name: '小程序'
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      }
    },
    methods: {

    },
    mounted() {
      const c = echarts.init(document.getElementById('home'), 'light')
      c.setOption(this.option)
    }
  }
</script>

<style scoped>
  #home {
    margin-top: 10px;
    width: 100%;
  }

  @media (min-width: 768px) {
    #home {
      height: 550px;
    }
  }
  @media (max-width: 480px) {
    #home {
      height: 360px;
    }
  }
</style>