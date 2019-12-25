package com.zhiy.dao;

import com.zhiy.pojo.Gxxxb;
import com.zhiy.pojo.Scj;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ScjMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Scj record);

    int insertSelective(Scj record);

    Scj selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Scj record);

    int updateByPrimaryKey(Scj record);

    int countzy();

//    Gxxxb selectbygxxm(@Param("Gxxm") String Gxxm);

    int insertzy(@Param("id") int id,@Param("username") String username, @Param("gxmc") String gxmc,  @Param("zymc") String zymc,@Param("kb") String kb, @Param("pc") String pc);

    List<Scj> getzyList(@Param("username") String username);
    //获得收藏学校
    List<Scj> getzyxxList(@Param("username") String username);

    int delete(@Param("username") String username, @Param("gxmc") String gxmc,  @Param("zymc") String zymc,@Param("kb") String kb, @Param("pc") String pc);

    int selectCount(@Param("username") String username);

    int check(@Param("username") String username, @Param("gxmc") String gxmc,  @Param("zymc") String zymc,@Param("kb") String kb, @Param("pc") String pc);
    int checkxx(@Param("username") String username, @Param("gxmc") String gxmc);

}