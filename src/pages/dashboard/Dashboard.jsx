import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/avatar.jpg'
import DashboardTitle from '../../components/DashboardTitle'


const sideBar = [
  {
    id: 1,
    label: "Dashboard",
    path: '/dashboard/home'
  },
  {
    id: 2,
    label: "Orders",
    path: '/dashboard/home'
  },
  {
    id: 3,
    label: "Sales",
    path: '/dashboard/home'
  },
]
const Dashboard = () => {
  return (
    <div className='min-h-screen'>

      {/* top-nav Area */}
      <div className='container mx-auto flex flex-row justify-between items-center my-2'>
        <img src={logo} alt="The Buchhandlung " className='h-10 block' />
        <div className='flex flex-row ite gap-x-10'>
          <img src={avatar} alt="The Buchhandlung " className='h-12 w-12 ring-1 ring-primary block rounded-full' />
          <button className='btn btn-error'>Logout</button>
        </div>
      </div>



      {/* Main Content Area::: */}
      <div className='min-h-screen flex'>
        {/* Side Bar */}
        <aside className='w-[300px] min-h-full p-5 '>
          {
            sideBar.map(item => <a key={item?.id} href={item?.path} className='my-1 bg-gradient-to-r p-2 rounded-sm block from-gray-200 to-purple-200/50 w-full font-medium transition-all hover:bg-slate-600'>{item?.label}</a>)
          }
        </aside>



        {/* Main Content Area */}
        <div className='w-full rounded-md border-2 border-black/20 border-dashed border-spacing-1'>
          <DashboardTitle>Welcome To Dashboard</DashboardTitle>
          {/*  */}
          
        </div>
      </div>
    </div>
  )
}

export default Dashboard