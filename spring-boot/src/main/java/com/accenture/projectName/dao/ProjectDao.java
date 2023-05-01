package com.organization.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.organization.project.model.ProjectModel;

interface ProjectDao extends JpaRepository<ProjectModel, Integer>{

}