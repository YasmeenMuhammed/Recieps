import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MealDetailsSkeleton = () => {
  return (
    <div className="container p-10">
      <div className="flex flex-wrap">
        
        <div className="lg:w-1/3 w-full">
          <div className="first-content">
            <div className="mb-4">
              <Skeleton height={50} width="80%" />
            </div>
            <div className="meal-img">
              <Skeleton height={300} borderRadius="1rem" className="aspect-square w-full" />
            </div>
            <div className="btns flex justify-center gap-4 mt-5">
              <Skeleton width={120} height={45} borderRadius="0.5rem" />
              <Skeleton width={120} height={45} borderRadius="0.5rem" />
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 w-full p-5 pt-15">
          <Skeleton count={8} height={20} className="mb-3" />
          <Skeleton width="60%" height={20} />
        </div>

        <div className="lg:w-1/3 w-full px-3">
          <div className="bg-white rounded-2xl p-4">
            <div className="mb-4 border-b-4 p-2 border-gray-100">
              <Skeleton width="50%" height={30} />
            </div>
            
            {/* قائمة المكونات (هنكرر 6 أسطر مثلاً) */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex justify-between p-2 border-b-2 border-gray-50 last:border-b-0">
                <Skeleton width={100} height={25} />
                <Skeleton width={60} height={25} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MealDetailsSkeleton;