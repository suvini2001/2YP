
import { useParams } from 'react-router-dom';

const Doctors = () => {
  const { speciality } = useParams();

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {speciality ? `${speciality} Specialists` : 'All Doctors'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* You can filter doctors based on speciality here */}
      </div>
    </div>
  )
}

export default Doctors