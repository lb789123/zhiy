package com.zhiy.dao;

import com.zhiy.pojo.Zsklb;

public interface ZsklbMapper {
    int deleteByPrimaryKey(String id);

    int insert(Zsklb record);

    int insertSelective(Zsklb record);

    Zsklb selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Zsklb record);

    int updateByPrimaryKey(Zsklb record);
}