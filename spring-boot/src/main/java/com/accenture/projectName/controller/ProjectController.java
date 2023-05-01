package com.organization.project.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import com.organization.project.service.ProjectService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
class ProjectController {

    @Autowired
    private ProjectService projectService;

}