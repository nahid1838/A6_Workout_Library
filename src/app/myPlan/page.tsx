import ToggleButtons from "@/components/myPlan/ToggleButtons";

const MyPlanPage = () => {
    return (
        <div className='container mx-auto py-10 space-y-7 '>
            <div className='space-y-2'>
                <h3 className='text-2xl font-bold scale-y-150'>MY PLAN</h3>
                <p>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <div className='flex gap-[33.3%] bg-[#232732] px-5 py-10 rounded-2xl'>
                <div>
                    <p className='text-gray-400'>Exercises</p>
                    <h3 className='text-3xl font-bold scale-y-120 text-[#C2F800]'>20</h3>
                </div>
                <div className='border-l pl-5 border-gray-600'>
                    <p className='text-gray-400'>Minutes</p>
                    <h3 className='text-3xl font-bold scale-y-120'>340</h3>
                </div>
                <div className='border-l pl-5 border-gray-600'>
                    <p className='text-gray-400'>Calories</p>
                    <h3 className='text-3xl font-bold scale-y-120'>230</h3>
                </div>
            </div>

            <div>
                
                <ToggleButtons></ToggleButtons>
                
            </div>
        </div>
    );
};

export default MyPlanPage;