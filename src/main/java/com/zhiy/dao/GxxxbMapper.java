package com.zhiy.dao;

import com.zhiy.pojo.Gxxxb;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface GxxxbMapper {
    int deleteByPrimaryKey(String gxtydm);

    int insert(Gxxxb record);

    int insertSelective(Gxxxb record);

    Gxxxb selectByPrimaryKey(String gxtydm);

    int updateByPrimaryKeySelective(Gxxxb record);

    int updateByPrimaryKey(Gxxxb record);
    //查找学校校名
    int checkGxxm(String Gxxm);
    //通过校名查找学校其他信息
    Gxxxb selectbygxxm(@Param("Gxxm") String Gxxm);
    //获得全部学校
    List<Gxxxb> selectList();
    List<Gxxxb> getGxxxbListclass(@Param("leibie") String leibie);

    List<Gxxxb> getGxxxbListzsd(@Param("zsd") String zsd);
    Gxxxb getTs(@Param("gxxm") String gxxm);
}