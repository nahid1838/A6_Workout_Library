import { ILibrary } from '@/types/type';
import Image from 'next/image';
import AddTodaysPlanButton from '../libraryDetails/AddTodaysPlanButton';
import SaveForLetterButton from '../libraryDetails/SaveForLetterButton';


const LibraryDetailCard = ({library}: {library: ILibrary}) => {
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-18'>
            <div className="relative w-full h-[500px] sm:h-[735px]">
                <Image
                  src={library.image}
                  alt="Library Image"
                  fill
                  className="rounded-2xl"
                />
            </div>
            <div className='flex flex-col gap-7 px-3'>
                <h3 className='text-2xl font-bold scale-y-130'>{library.name.toUpperCase()}</h3>
                <p>{library.description}</p>

                <div className="flex gap-5">
                    {library.muscleGroups.length > 1 ? (
                    <>
                        <p className="bg-[#C2F800] px-2 py-0.5 rounded-xl text-sm text-black font-bold">
                        {library.muscleGroups[0]}
                        </p>

                        <p className="bg-[#C2F800] px-2 py-0.5 rounded-xl text-sm text-black font-bold">
                        {library.muscleGroups[1]}
                        </p>
                    </>
                    ) : (
                        <p className="bg-[#C2F800] px-2 py-0.5 rounded-xl text-sm text-black font-bold">
                        {library.muscleGroups[0]}
                        </p>
                     )}
                </div>

                <div className='space-y-2.5 border border-gray-600 py-3 rounded-2xl bg-[#232834]'>
                    <p className='flex justify-between px-4'>EQUIPMENT <span>{library.equipment}</span></p>
                    <hr className='text-gray-600'/>
                    <p className='flex justify-between px-4'>DIFFICULTY <span>{library.difficulty}</span></p>
                    <hr className='text-gray-600' />
                    <p className='flex justify-between px-4'>SETS <span>{library.sets}</span></p>
                    <hr className='text-gray-600' />
                    <p className='flex justify-between px-4'>REPS <span>{library.reps}</span></p>
                    <hr className='text-gray-600' />
                    <p className='flex justify-between px-4'>DURATION <span>{library.duration} min</span></p>
                    <hr className='text-gray-600' />
                    <p className='flex justify-between px-4'>CALORIES <span>{library.caloriesBurned} kcal</span></p>
                    <hr className='text-gray-600' />
                    <p className='flex justify-between px-4'>RATING <span>{library.rating}</span></p>
                </div>

                <ol className='list-decimal list-inside'>
                    <h4 className='text-lg font-bold pb-2'>INSTRACTIONS</h4>
                    <li>{library.instructions[0]}</li>
                    <li>{library.instructions[1]}</li>
                    <li>{library.instructions[2]}</li>
                    <li>{library.instructions[3]}</li>
                </ol>
                <div className='flex flex-col sm:flex-row gap-5 w-fit mt-2'>
                    <AddTodaysPlanButton library={library}/>

                    <SaveForLetterButton library={library}/>
                </div>
            </div>
        </div>
    );
};

export default LibraryDetailCard;