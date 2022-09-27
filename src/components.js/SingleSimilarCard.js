import React from "react";

const SingleSimilarCard = ({ icon, cardColor, textColor }) => {
    const class_for_20_font_body = "text-base md:text-xl ";

    return (
        <div
            className={
                "single_card flex w-full min-w-[330px] flex-col gap-5 rounded-lg border-[0.25px] p-5 shadow-card-shadow sm:w-[60%] md:w-[45%] lg:w-[32%] " +
                cardColor
            }
        >
            <img className="rounded-lg" src="./Images/Similar-1.png" alt="" />

            <div className="flex flex-col gap-1">
                <p className={"box-border pl-1 font-font-montserrat font-semibold " + class_for_20_font_body + "" + textColor}>
                    2BHK Apartment for Sale
                </p>
                <div className="flex justify-between">
                    <p className={"font-base flex items-center gap-2 font-font-montserrat " + textColor}>
                        <span>{icon}</span>Behala
                    </p>
                    <p className={textColor}>₹ 15,000</p>
                </div>
            </div>
            <div className="buttons mt-3 flex flex-col gap-4">
                <button
                    className={
                        "h-10 w-full rounded-xl bg-light-button-color font-font-montserrat text-lg font-medium text-white shadow-card-button-shadow md:h-12"
                    }
                >
                    Contact Now
                </button>
                <button
                    className={
                        "h-10 w-full rounded-xl border bg-white font-font-montserrat text-lg font-medium text-black shadow-secondary-shadow md:h-12"
                    }
                >
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default SingleSimilarCard;
{
    /* <div className="single_card flex w-full min-w-[330px] flex-col gap-5 rounded-lg border p-5 sm:w-[60%] md:w-[45%] lg:w-[30%] sm-min:max-w-[420px] "></div> */
}
