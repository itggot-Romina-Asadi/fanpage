/**
 * Created by romina.asadi on 2017-04-24.
 */
function img_over() {
    document.querySelector(".post-it").classList.add("remove");
    document.querySelector(".post-it-hover").classList.remove("remove");
}

function img_out() {
    document.querySelector(".post-it").classList.remove("remove");
    document.querySelector(".post-it-hover").classList.add("remove");
}