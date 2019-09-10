import axios from "axios";

export default {
    // getAllMessage: function() {
    //     return axios.get("/api/message");
    // },
    saveMessage: function(data) {
        return axios.post("/api/message", data);
    },
    // getOneMessage: function(id) {
    //     return axios.get("/api/message/" + id);
    // },
    updateMessage: function(id) {
        return axios.post("/api/message/" + id);
    },
    // deleteMessage: function(id) {
    //     return axios.delete("/api/message/" + id);
    // },
    getAllProject: function() {
        return axios.get("/api/project");
    },
    // saveProject: function(data) {
    //     return axios.post("/api/project", data);
    // },
    getOneProject: function(id) {
        return axios.get("/api/project/" + id);
    },
    // updateProject: function(id) {
    //     return axios.post("/api/project/" + id);
    // },
    // deleteProject: function(id) {
    //     return axios.delete("/api/project/" + id);
    // }
};
