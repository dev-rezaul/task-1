import React from "react";
const MyProfile = () => {
    let name = "Kazi Rezaul Islam";
    let degree = "Bachelor in Computer Application";
    let passingYear = 2023;
    let college = "Sikkim Professional University";
    return(
        <>
            <section className="container">
                <h1>My Id Card</h1>
                <h2>Name : {name}</h2>
                <h3>Degree : {degree}</h3>
                <p>Passing Year : {passingYear}</p>
                <p>College : {college}</p>
            </section>
        </>
    )
}

export default MyProfile;