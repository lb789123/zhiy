package com.zhiy.dao;

import com.zhiy.pojo.Bklstdxxb;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BklstdxxbMapper {
    int deleteByPrimaryKey(String id);

    int insert(Bklstdxxb record);

    int insertSelective(Bklstdxxb record);

    Bklstdxxb selectByPrimaryKey(String id);

    Bklstdxxb select(@Param("zssf")  String id , @Param("zssf") String zssf,@Param("zskl") String zskl,@Param("zspc") String zspc);
    int updateByPrimaryKeySelective(Bklstdxxb record);

    int updateByPrimaryKey(Bklstdxxb record);

    List<Bklstdxxb> getBklstdxxbList(@Param("zssf") String zssf,@Param("gxxm") String gxxm,@Param("zskl") String zskl,@Param("zspc") String zspc);

    List<Bklstdxxb> getBklstdxxbListwkl(@Param("zssf") String zssf,@Param("gxxm") String gxxm,@Param("zspc") String zspc);

    List<Bklstdxxb> getBklstdxxbList1(@Param("zssf") String zssf,@Param("zskl") String zskl,@Param("zspc") String zspc);

    String getdqpcx(@Param("zssf") String zssf,@Param("zskl") String zskl,@Param("zspc") String zspc,@Param("nf") String nf);

    Bklstdxxb selectbyzdf(@Param("zdf")String zdf);

    int count();

    Bklstdxxb checkid(@Param("id")String id, @Param("zssf") String zssf,@Param("zskl") String zskl,@Param("zspc") String zspc);

    List<Bklstdxxb> checkzssf(@Param("zssf") String zssf,@Param("zskl") String zskl,@Param("zspc") String zspc);
}