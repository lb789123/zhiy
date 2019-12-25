package com.zhiy.dao;

import com.zhiy.pojo.Sfxxb;

public interface SfxxbMapper {
    int deleteByPrimaryKey(String sfdm);

    int insert(Sfxxb record);

    int insertSelective(Sfxxb record);

    Sfxxb selectByPrimaryKey(String sfdm);

    int updateByPrimaryKeySelective(Sfxxb record);

    int updateByPrimaryKey(Sfxxb record);
}