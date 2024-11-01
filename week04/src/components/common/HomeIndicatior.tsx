import indicator from "../../assets/Common/HomeIndicator.svg";

const HomeIndicator = () => {
    return (
        <div className="w-full h-indicatorHeight bg-White">
            <div className='flex justify-center'>
                <img src={indicator} alt="indicator"/>
            </div>
        </div>
    );
}

export default HomeIndicator;
