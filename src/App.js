import React, { useRef, useState } from "react";

// Components -----------------------------------------------------------------------------------
import SingleDetail from "./components.js/SingleDetail";
import SingleNearby from "./components.js/SingleNearby";
import SingleSimilarCard from "./components.js/SingleSimilarCard";

// Icons ------------------------------------------------------------------------------------------
import {
    menu_icon,
    profile_icon,
    icon_below_image_icon_1,
    icon_below_image_icon_2,
    icon_below_image_icon_3,
    details_1_icon,
    details_2_icon,
    details_3_icon,
    details_4_icon,
    features_icon,
    nearby_1_icon,
    nearby_2_icon,
    nearby_3_icon,
    nearby_4_icon,
    nearby_5_icon,
    location_icon,
    location_icon_white,
} from "./helper/Icons";

const App = () => {
    // Some Font Sizes for Make website Responsive
    const class_for_32_font = "text-1.5xl md:text-3.5xl ";
    const class_for_24_font_button = "text-lg md:text-1.5xl ";
    const class_for_20_font_body = "text-base md:text-xl ";

    // For scroll on Respective Element by Clicking
    const scrollToOverview = useRef();
    const scrollToDetails = useRef();
    const scrollToFeatures = useRef();
    const scrollToNearby = useRef();

    const [buttonActive, setButtonActive] = useState("overview");
    const buttonActiveClasses = " border-b-2 border-text-color font-medium text-text-color ";

    return (
        <div>
            {/* Header ----------------------------------------------------------------------------------------------------- */}
            <nav className="box-border flex h-16 w-full items-center justify-between bg-white px-5 shadow-secondary-shadow md:px-9 lg:px-14">
                {/* 1) Logo */}
                <div className="logo">
                    <p className="logo logo_properties font-font-montserrat text-2xl font-bold tracking-[14.5%] text-black md:text-2.5xl">
                        Propertybhavan
                    </p>
                </div>

                {/* 2) Menu on Mobile */}
                <div className="md:hidden">{menu_icon}</div>

                {/* 3) Other nav Items on Large Screens */}
                <div className="other_nav_items hidden items-center md:flex md:gap-7 lg:gap-10 xl:gap-11">
                    <p className="font-font-roboto text-1.5xl font-medium">Home</p>
                    <p className="font-font-roboto text-1.5xl font-medium">List your Property</p>
                    <p className="font-font-roboto text-1.5xl font-medium">Blog</p>
                    <p>{profile_icon}</p>
                </div>
            </nav>

            {/* Hero Section and All------------------------------------------------------------------------------------------ */}
            <div className="main_section box-border flex flex-col gap-6 px-5 pt-6 pb-10 md:px-9 lg:px-14">
                {/* 2) Main Section ---------------------------------------------------------------------------------------------- */}
                <div className="hero_section box-border flex flex-col gap-4">
                    {/* Button and Text */}
                    <div className="flex flex-col gap-4">
                        <button
                            className={
                                "box-border w-32 rounded-xl bg-light-button-color px-6 py-2 font-font-montserrat font-semibold text-white shadow-secondary-shadow md:w-40 " +
                                class_for_24_font_button
                            }
                        >
                            For Rent
                        </button>
                        <p className={"font-font-montserrat font-semibold " + class_for_32_font}>
                            2BHK Apartment for Sale in Newtown, Kolkata, West Bengal
                        </p>
                    </div>

                    {/* 2) Images */}
                    <div className="image_all flex flex-col gap-4 pb-14 md:flex-row">
                        <img className="w-full md:w-1/2" src="./Images/Image - 1.jpg" alt="Not Found" />
                        <div className="images_grid relative box-border grid w-full grid-cols-2 grid-rows-2 gap-2 pt-1">
                            <img className="w-full" src="./Images/Image-2.png" alt="Not Found" />
                            <img className="w-full" src="./Images/Image-2.png" alt="Not Found" />
                            <img className="w-full" src="./Images/Image-2.png" alt="Not Found" />
                            <img className="w-full" src="./Images/Image-2.png" alt="Not Found" />

                            <div className="three_small_buttons absolute right-0 bottom-[-2.5rem] flex gap-3">
                                <button className="flex h-8 w-12 items-center justify-center rounded-lg border border-text-color shadow-secondary-shadow">
                                    {icon_below_image_icon_1}
                                </button>

                                <button className="flex h-8 w-12 items-center justify-center rounded-lg border border-text-color shadow-secondary-shadow">
                                    {icon_below_image_icon_2}
                                </button>
                                <button className="flex h-8 w-12 items-center justify-center gap-[-10px] rounded-lg border border-text-color shadow-secondary-shadow">
                                    {icon_below_image_icon_3}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Price and Context ---------------------------------------------------------------------------------------------- */}
                <div className="price_and_details flex flex-col gap-1">
                    <p className={"font-font-montserrat font-semibold text-text-color " + class_for_32_font}>₹ 25,000</p>
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <p className={"font-font-montserrat font-normal md:w-1/2 lg:w-auto " + class_for_20_font_body}>
                            SP Sukhobrishti Ln, Action Area III, Newtown, Kolkata, West Bengal 700135, India
                        </p>
                        <div className="flex max-w-max gap-1">
                            <img className="h-14 md:h-16" src="./Images/Whatsapp.png" alt="" />
                            <button
                                className={
                                    "h-12 w-52 rounded-xl bg-light-button-color font-font-montserrat font-semibold text-white shadow-secondary-shadow md:h-14 md:w-60 " +
                                    class_for_24_font_button
                                }
                            >
                                Contact Owner
                            </button>
                        </div>
                    </div>
                    <div className="mt-3 flex justify-center gap-5 sm:gap-8 md:gap-10">
                        <p
                            className={`cursor-pointer text-lg md:text-1.5xl ${buttonActive === "overview" && buttonActiveClasses}`}
                            onClick={() => {
                                setButtonActive("overview");
                                scrollToOverview.current.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Overview
                        </p>
                        <p
                            className={`cursor-pointer text-lg md:text-1.5xl ${buttonActive === "details" && buttonActiveClasses}`}
                            onClick={() => {
                                setButtonActive("details");
                                scrollToDetails.current.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Details
                        </p>
                        <p
                            className={`cursor-pointer text-lg md:text-1.5xl ${buttonActive === "features" && buttonActiveClasses}`}
                            onClick={() => {
                                setButtonActive("features");
                                scrollToFeatures.current.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Features & Amenities
                        </p>
                        <p
                            className={`cursor-pointer text-lg md:text-1.5xl ${buttonActive === "nearby" && buttonActiveClasses}`}
                            onClick={() => {
                                setButtonActive("nearby");
                                scrollToNearby.current.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Nearby
                        </p>
                    </div>
                </div>

                {/* Overview ---------------------------------------------------------------------------------------------- */}
                <div ref={scrollToOverview} className="overview mt-8 flex flex-col gap-4">
                    <p className={"light_shadow_text font-font-montserrat font-medium text-text-color " + class_for_32_font}>Overview</p>
                    <p className={"w-full font-font-montserrat md:w-3/4 " + class_for_20_font_body}>
                        Property taxes are charged by local government entities, such as KMC, and are due by the owner of the property. The amount of
                        KMC property tax that must be paid may vary. Thus, it depends on the location and a number of other criteria. KMC approved the
                        new Unit Area Assessment (UAA) mechanism for calculating property taxes in March 2017.
                    </p>
                </div>

                {/* Datails ---------------------------------------------------------------------------------------------- */}
                <div ref={scrollToDetails} className="overview mt-8 flex flex-col gap-4">
                    <p className={"light_shadow_text font-font-montserrat font-medium text-text-color " + class_for_32_font}>Details</p>

                    <div className="flex flex-row flex-wrap justify-start gap-x-8 gap-y-6 lg:justify-between lg:gap-x-1">
                        <SingleDetail icon={details_1_icon} propertyName="BHK" propertyValue="3BHK" />
                        <SingleDetail icon={details_2_icon} propertyName="Bathroom" propertyValue="2" />
                        <SingleDetail icon={details_3_icon} propertyName="Furnishing Status" propertyValue="Semi-Furnished" />
                        <SingleDetail icon={details_4_icon} propertyName="Super Build Area" propertyValue="1418 Sq.ft" />
                    </div>
                </div>

                {/* Features ---------------------------------------------------------------------------------------------- */}
                <div ref={scrollToFeatures} className="overview mt-8 flex flex-col gap-4 sm-min:gap-3">
                    <p className={"light_shadow_text font-font-montserrat font-medium text-text-color " + class_for_32_font}> Features & Amenities</p>
                    <div className="flex flex-col gap-y-3 gap-x-20 sm-min:flex-row">
                        <p className={"flex items-center gap-2 font-font-montserrat font-medium " + class_for_20_font_body}>
                            <span>{features_icon}</span> CCTV
                        </p>
                        <p className={"flex items-center gap-2 font-font-montserrat font-medium " + class_for_20_font_body}>
                            <span>{features_icon}</span> Security
                        </p>
                        <p className={"flex items-center gap-2 font-font-montserrat font-medium " + class_for_20_font_body}>
                            <span>{features_icon}</span> Life
                        </p>
                    </div>
                </div>

                {/* NearBy ---------------------------------------------------------------------------------------------- */}
                <div ref={scrollToNearby} className="nearby mt-8 flex flex-col gap-4 sm-min:gap-3">
                    <p className={"light_shadow_text font-font-montserrat font-medium text-text-color " + class_for_32_font}>Nearby</p>
                    <div className="flex flex-wrap gap-5 md:gap-7">
                        <SingleNearby icon={nearby_1_icon} propertyValue="Hospital" />
                        <SingleNearby icon={nearby_2_icon} propertyValue="Park" />
                        <SingleNearby icon={nearby_3_icon} propertyValue="Bus" />
                        <SingleNearby icon={nearby_4_icon} propertyValue="Hospital" />
                        <SingleNearby icon={nearby_5_icon} propertyValue="Gym" />
                    </div>
                </div>

                {/* Similar Properties ---------------------------------------------------------------------------------------------- */}
                <div className="similar_properties mt-8 flex flex-col gap-4 sm-min:gap-3">
                    <p className={"light_shadow_text font-font-montserrat font-medium text-text-color " + class_for_32_font}>Similar Properties</p>

                    <div className="cards flex flex-wrap justify-center gap-x-5 gap-y-10 lg:justify-start lg:gap-2">
                        <SingleSimilarCard cardColor={"bg-white"} textColor="text-black" icon={location_icon} />
                        <SingleSimilarCard cardColor={"bg-dark-card-color"} textColor="text-white" icon={location_icon_white} />
                        <SingleSimilarCard cardColor={"bg-light-card-color"} textColor="text-white" icon={location_icon_white} />
                    </div>
                    <div className="mt-8 flex justify-center gap-6">
                        <div className="h-5 w-5 rounded-full bg-dark-button-color"></div>
                        <div className="h-5 w-5 rounded-full bg-dark-button-color"></div>
                        <div className="h-5 w-5 rounded-full bg-dark-button-color"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
