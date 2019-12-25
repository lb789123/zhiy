package com.zhiy.dao;

import com.zhiy.pojo.Scjxx;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ScjxxMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Scjxx record);

    int insertSelective(Scjxx record);

    Scjxx selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Scjxx record);

    int updateByPrimaryKey(Scjxx record);

    List<Scjxx> getzyxxxList(@Param("username") String username);

    int countzy();

    int checkxx(@Param("username") String username, @Param("gxmc") String gxmc);
}