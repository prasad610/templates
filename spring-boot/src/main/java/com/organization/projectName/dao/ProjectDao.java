package com.organization.project.dao;

import org.springframework.data.repository.CrudRepository;

import com.organization.project.model.ProjectModel;

interface ProjectDao extends CrudRepository<ProjectModel, Integer>{

}
