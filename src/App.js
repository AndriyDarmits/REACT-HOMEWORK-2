import logo from './logo.svg';
import './App.css';
import UserInfo from '../src/components/UserInfo';
import Avatar from '../src/components/Avatar';
import Address from '../src/components/Address';
import UserList from '../src/components/UserList';
import CheckBox from '../src/components/CheckBox';




/* const userInfo = {
  firstName: 'Michael',
  lastName: 'Jackson',
  address: {
    country: 'UA',
    city: 'Ivano-Frankivsk',
    street: 'Nezalezhnosti, 1',
    postIndex: '76000'
  }
} */
const userInfoList = [{
  firstName: 'Michael',
  lastName: 'Jackson',
  address: {
    country: 'UA',
    city: 'Ivano-Frankivsk',
    street: 'Nezalezhnosti, 1',
    postIndex: '76000'
  },
  active: true

},
{
  firstName: 'Andrii',
  lastName: 'Darmits',
  address: {
    country: 'UA',
    city: 'Kyiv',
    street: 'Stusa, 1',
    postIndex: '77100'
  },
  active: false
},
{
  firstName: 'Stepan',
  lastName: 'Knyazevych',
  address: {
    country: 'UA',
    city: 'Yablunka',
    street: 'Lisna, 5',
    postIndex: '77011'
  },
  active: false
},
{
  firstName: 'Igor',
  lastName: 'Verenka',
  address: {
    country: 'UA',
    city: 'Lviv',
    street: 'Shevchenka, 12',
    postIndex: '54035'
  },
  active: false
},
{
  firstName: 'Peter',
  lastName: 'Semeryak',
  address: {
    country: 'USA',
    city: 'Washington',
    street: 'Washington, 255',
    postIndex: '14688'
  },
  active: true
},
{
  firstName: 'Oleh',
  lastName: 'Baiula',
  address: {
    country: 'UA',
    city: 'Ivano-Frankivsk',
    street: 'Nezalezhnosti, 1',
    postIndex: '76000'
  },
  active: true
}
]
function App() {
  return (
    <>
      <CheckBox userList={userInfoList} />
    </>

  );
}
// task 1
/* <UserInfo info={userInfo} /> */


export default App;
