import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
      <div className="my-8">
        <Banner/>
      </div>
    </div>
  )
}



export default Home