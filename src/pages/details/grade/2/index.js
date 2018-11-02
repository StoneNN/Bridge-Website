
import { Table } from 'antd';
export const TeamData = [
    {key: 1,
      round: '1',
      players: '石家庄  VS  内蒙古',
      IMPs: '6：13',
      VPs:'6.12：13.88',
      points:'12'
    },
    {key: 2,
      round: '2',
      players: '石家庄  VS  河南',
      IMPs: '8：12',
      VPs:'6.12：13.88',
      points:'12'
    },
    {key: 3,
      round: '3',
      players: '石家庄  VS  天津',
      IMPs: '9：23',
      VPs:'6.12：13.88',
      points:'12'
    },
    {key: 4,
      round: '4',
      players: '石家庄  VS  广州',
      IMPs: '5：8',
      VPs:'6.12：13.88',
      points:'12'
    },
    {key: 5,
      round: '5',
      players: '石家庄  VS  北京',
      IMPs: '6：13',
      VPs:'6.12：13.88',
      points:'12'
    },
    {key: 6,
      round: '6',
      players: '石家庄  VS  上海',
      IMPs: '6：13',
      VPs:'6.12：13.88',
      points:'12'
    },]

      const columns = [
        {
         title: '轮次',
         dataIndex: 'round',
         width: 50,
        },
        {
         title: '对阵方',
         dataIndex: 'players',
         width: 150,
        }, 
        { 
         title: 'IMPs',
         dataIndex: 'IMPs',
         width: 100,
        }, 
        {
         title:'VPs',
         dataIndex: 'VPs',
         width: 100,
         },
         {
          title:'总分',
          dataIndex: 'points',
          width: 100,
          }]
         class TeamList extends React.Component {
          render() {
            return (
                  <div > 
                      <div style={{backgroundColor:"lightGray",textAlign:"center",lineHeight:'60px',color:'white',fontSize:'20px',fontWeight:'bold'}}>石家庄</div>
                      <Table 
                        columns = {columns}
                        dataSource = { TeamData }
                        // pagination={{ pageSize: 5 }} 
                        size = "small"
                      />
                  </div>
            )
          }
        }
  
  
  export default TeamList
  