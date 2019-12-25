package com.zhiy.dao;

import com.zhiy.pojo.School;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface SchoolMapper {
    int deleteByPrimaryKey(Integer schoolcol);

    int insert(School record);

    int insertSelective(School record);

    School selectByPrimaryKey(Integer schoolcol);

    int updateByPrimaryKeySelective(School record);

    int updateByPrimaryKey(School record);

    int checkschool(String school);
    //通过校名查找学校其他信息
    School selectbyschool(@Param("school") String school);
    //查找985的学校
    List<School> selectbyjiu();
    //查找211的学校
    List<School> selectbyer();
    //查找双一流的学校
    List<School> selectbyshuang(@Param("ts") String ts);
}