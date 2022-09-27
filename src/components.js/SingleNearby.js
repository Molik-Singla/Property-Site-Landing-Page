import React from "react";

const SingleNearby = ({ icon, propertyValue }) => {
    const class_for_20_font_body = "text-base md:text-xl ";

    return (
        <div className="single_nearby flex h-[132px] w-32 flex-col items-center justify-center gap-2 rounded-lg bg-dark-button-color shadow-card-shadow">
            {icon}
            <p className={"font-font-montserrat font-medium text-white " + class_for_20_font_body}>{propertyValue}</p>
        </div>
    );
};

export default SingleNearby;
