const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot6n498/",
            name: "springboot6n498",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot6n498/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "个性化电影推荐系统"
        } 
    }
}
export default base
