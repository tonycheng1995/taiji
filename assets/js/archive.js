(function () {

    $(document).ready(function () {
        let index = 10;
        let params = window.location.search.substring(1);
        const arr=params.split("=");
        let key=decodeURIComponent(arr[0]);
        let val =decodeURIComponent(arr[1]);
        let $posts = $(".post-list");

        if("tag"==key){
            //标签
            queryByTag(val,$posts,index);
        }else{
            //分类
            queryByClass(val,$posts,index);
        }


        //监听是否滑动到底部，加载更多
        $(window).scroll(function () {
            if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
                index++;
                if("tag"==key){
                    //标签
                    queryByTag(val,$posts,index);
                }else{
                    //分类
                    queryByClass(val,$posts,index);
                }
            }
        });

    });

})();

//标签查询
function queryByTag(val,$posts,index) {
    if (val == "undefined") {
        //全部
        $($posts).filter(":lt(" + index + ")").show();
    } else {
        //标签查询
        for (const $post of $posts) {
            let tags = $($post).attr("tags").split(",");
            for (const value of tags) {
                if (value === val) {
                    $($post).show();
                    continue;
                }
            }
        }
    }
}
//分类查询
function queryByClass(val,$posts,index) {
    if (val == "undefined") {
        //全部
        $($posts).filter(":lt(" + index + ")").show();
    } else {
        //标签查询
        for (const $post of $posts) {
            let category = $($post).attr("category");
                if (category === val) {
                    $($post).show();
                    continue;
                }
        }
    }
}