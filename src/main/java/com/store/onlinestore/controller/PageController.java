package com.store.onlinestore.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/")
public class PageController {

    @GetMapping(value = { "/", "/new", "/login", "/register", "/projects/**"})
    public String serveReactApp() {
        return "forward:/projects.html";
    }

    @GetMapping("/{projectId}/tasks")
    public String serveTasksReactPage(@PathVariable Long projectId) {
        return "forward:/projects.html";
    }

    @GetMapping("/{projectId}/tasks/new")
    public String serveCreateTaskReactPage(@PathVariable Long projectId) {
        return "forward:/projects.html";
    }

    @GetMapping("/{path:^(?!.*\\.).*}")
    public String redirectOtherRoutes(@PathVariable String path) {
        return "forward:/projects.html";
    }

}
