import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MealCardSkeleton = () => {
    return (
        <div className="card sm:col-span-12 md:col-span-6 lg:col-span-3 bg-white items-center rounded-4xl p-4 mt-12">
            <div className="flex justify-center -translate-y-20">
                <Skeleton 
                    circle 
                    width={180} 
                    height={180} 
                    containerClassName="avatar-skeleton"
                />
            </div>
            <div className="card-content flex flex-col items-center gap-4 -translate-y-5">
                <h2 className="w-3/4 -mt-12">
                    <Skeleton height={28} />
                </h2>
                <div className="flex gap-2 items-center w-1/2">
                    <Skeleton circle width={24} height={24} />
                    <div className="grow">
                        <Skeleton height={20} />
                    </div>
                </div>
                <div className="w-full px-4 mt-2">
                    <Skeleton 
                        height={48} 
                        borderRadius="1.5rem"
                    />
                </div>
            </div>
        </div>
    );
};

export default MealCardSkeleton;