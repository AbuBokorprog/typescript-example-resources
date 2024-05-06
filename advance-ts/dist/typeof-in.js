"use strict";
{
    // type guard using type of
    function add(p, p2) {
        if (typeof p == "number" && typeof p2 == "number") {
            return p + p2;
        }
        else {
            return `${p}` + `${p2}`;
        }
    }
    const res1 = add(2, "5");
    const manageUser = (user) => {
        if ("role" in user && user.role === "Admin") {
            console.log("this is admin");
        }
        else {
            console.log("this is user");
        }
    };
    const adminUser = {
        name: "john",
        email: "@gmail.com",
        role: "Admin",
    };
    manageUser(adminUser);
}
