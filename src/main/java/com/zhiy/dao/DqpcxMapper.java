package com.zhiy.dao;

import com.zhiy.pojo.Dqpcx;
import org.apache.ibatis.annotations.Param;
import com.zhiy.vo.dqpc;
import java.util.List;

public interface DqpcxMapper {
    int deleteByPrimaryKey(String id);

    int insert(Dqpcx record);

    int insertSelective(Dqpcx record);

    Dqpcx selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Dqpcx record);

    int updateByPrimaryKey(Dqpcx record);

    List<Dqpcx> getDqpcxListzsd(@Param("zsd") String zsd);
    List<dqpc> getDqpcxListkezsd(@Param("zsd") String zsd,@Param("kelei") String kelei,@Param("pcmc") String pcmc);
    String getdqpc(@Param("zssf") String zssf,@Param("zskl") String zskl,@Param("zspc") String zspc,@Param("nf") String nf);

}