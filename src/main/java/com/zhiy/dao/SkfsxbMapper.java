package com.zhiy.dao;

import com.zhiy.pojo.Skfsxb;

public interface SkfsxbMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Skfsxb record);

    int insertSelective(Skfsxb record);

    Skfsxb selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Skfsxb record);

    int updateByPrimaryKey(Skfsxb record);
}