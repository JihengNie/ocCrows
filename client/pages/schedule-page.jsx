import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SectionTitle from '../components/section-title';

export default class SchedulePage extends React.Component {

  render() {
    return (
      <div className='container'>
        <Header />
        <SectionTitle text='SD Slammer 2022'/>
        <div className='schedules-text-holder'>
          <table>
            <thead>
              June 25, 2022
            </thead>
            <tr>
              <th> Time </th>
              <th> Field </th>
              <th> Oppoent </th>
              <th> Score </th>
            </tr>
            <tr>
              <td> 10:00 am</td>
              <td> 3 </td>
              <td> Monsoon </td>
              <td> 11 - 8</td>
            </tr>
            <tr>
              <td> 11:40 am</td>
              <td> 2 </td>
              <td> Hazard </td>
              <td> 13 - 7 </td>
            </tr>
            <tr>
              <td> 1:20 pm</td>
              <td> 1 </td>
              <td> Streetgang </td>
              <td> 8 - 12 </td>
            </tr>
          </table>
          <table>
            <thead>
              June 26, 2022
            </thead>
            <tr>
              <th> Time </th>
              <th> Field </th>
              <th> Oppoent </th>
              <th> Score </th>
            </tr>
            <tr>
              <td> 10:00 am</td>
              <td> 3 </td>
              <td> Baja </td>
              <td> 11 - 12</td>
            </tr>
            <tr>
              <td> 11:40 am</td>
              <td> 2 </td>
              <td> OAT </td>
              <td> 3 - 11 </td>
            </tr>
          </table>
        </div>
        <SectionTitle text='Shootout 2022' />
        <div className='schedules-text-holder'>
          <table>
            <thead>
              July 23, 2022
            </thead>
            <tr>
              <th> Time </th>
              <th> Field </th>
              <th> Oppoent </th>
              <th> Score </th>
            </tr>
            <tr>
              <td> 9:00 am</td>
              <td> 2 </td>
              <td> Drought </td>
              <td> 9 - 15</td>
            </tr>
            <tr>
              <td> 10:50 am</td>
              <td> 2 </td>
              <td> Hazard </td>
              <td> 13 - 14 </td>
            </tr>
            <tr>
              <td> 12:40 pm</td>
              <td> 1 </td>
              <td> Offshore </td>
              <td> 11 - 14 </td>
            </tr>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}
