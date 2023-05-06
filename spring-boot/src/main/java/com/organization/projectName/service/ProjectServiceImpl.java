package com.organization.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.organization.project.ProjectDaoImpl;

@Service
class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectDaoImpl projectDaoImpl;

}