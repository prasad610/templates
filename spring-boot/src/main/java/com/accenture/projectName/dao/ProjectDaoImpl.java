package com.organization.project.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
class ProjectDaoImpl {

    @Lazy
    @Autowired
    ProjectDao projectDao;

}