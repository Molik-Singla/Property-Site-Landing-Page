import React from "react";

const SingleDetail = ({ icon, propertyName, propertyValue }) => {
    const class_for_20_font_body = "text-base md:text-xl ";

    return (
        <div className="single_card_type_small box-border flex h-40 w-4/5 min-w-[225px] max-w-[320px] flex-col gap-5 rounded-xl border border-text-color pl-6 pt-2 pb-3 shadow-primary-shadow md:w-[24%]">
            {icon}

            <div>
                <p className={"light_shadow_text font-font-montserrat font-semibold text-text-color " + class_for_20_font_body}>{propertyName}</p>
                <p className={"light_shadow_text font-font-montserrat font-medium"}>{propertyValue}</p>
            </div>
        </div>
    );
};

export default SingleDetail;
