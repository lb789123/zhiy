package com.zhiy.dao;

import com.zhiy.pojo.Zyb;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ZybMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Zyb record);

    int insertSelective(Zyb record);

    Zyb selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Zyb record);

    int updateByPrimaryKey(Zyb record);

    int countzy();

    int insertzy(@Param("id") int id, @Param("username") String username, @Param("gxmc") String gxmc, @Param("zymc") String zymc, @Param("kb") String kb, @Param("pc") String pc);

    List<Zyb> getzybList(@Param("username") String username);

    int delete(@Param("username") String username, @Param("gxmc") String gxmc,  @Param("zymc") String zymc,@Param("kb") String kb, @Param("pc") String pc);

    int selectCount(@Param("username") String username);

    int check(@Param("username") String username, @Param("gxmc") String gxmc,  @Param("zymc") String zymc,@Param("kb") String kb, @Param("pc") String pc);
}