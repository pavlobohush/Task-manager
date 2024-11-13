package com.store.onlinestore.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/tasks-page")
    public String showTasksPage() {
        return "tasks";
    }
}
