package com.zhiy.dao;

import com.zhiy.pojo.Zyfsx;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ZyfsxMapper {
    int deleteByPrimaryKey(String id);

    int insert(Zyfsx record);

    int insertSelective(Zyfsx record);

    Zyfsx selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Zyfsx record);

    int updateByPrimaryKey(Zyfsx record);

    List<Zyfsx> gezyList1(@Param("ksdq") String ksdq, @Param("gxmc") String gxmc, @Param("pc") String pc);

    List<Zyfsx> gezyList(@Param("ksdq") String ksdq, @Param("gxmc") String gxmc, @Param("kb") String kb, @Param("pc") String pc);

    List<Zyfsx> gezyfsList(@Param("ksdq") String ksdq,@Param("gxmc") String gxmc,@Param("kb") String kb,@Param("pc") String pc,@Param("zymc") String zymc);

}