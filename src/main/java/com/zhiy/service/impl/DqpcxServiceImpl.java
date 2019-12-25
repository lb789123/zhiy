package com.zhiy.service.impl;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.google.common.collect.Lists;
import com.zhiy.common.Const;
import com.zhiy.common.ServerResponse;
import com.zhiy.common.TokenCache;
import com.zhiy.dao.DqpcxMapper;
import com.zhiy.pojo.Dqpcx;
import com.zhiy.service.IDqpcxService;
import com.zhiy.util.MD5Util;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.zhiy.vo.DqpcxListVo;
import com.zhiy.vo.dqpc;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
/**
 * Created by bu
 */


@Service("iDqpcxService")
public class DqpcxServiceImpl  implements IDqpcxService {

    @Autowired
    DqpcxMapper dqpcxMapper;

    @Override
    public ServerResponse<PageInfo> getDqpcxListzsd(int pageNum, int pageSize,String zsd){
        PageHelper.startPage(pageNum,pageSize);
        List<Dqpcx> dqpcxListzsd = dqpcxMapper.getDqpcxListzsd(zsd);
        List<DqpcxListVo> dqpcxListVoList = Lists.newArrayList();
        for(Dqpcx dqpcxItem : dqpcxListzsd){
            DqpcxListVo dqpcxListVo = assembleDqpcxListVo(dqpcxItem);
            dqpcxListVoList.add(dqpcxListVo);
        }
        PageInfo pageResult = new PageInfo(dqpcxListzsd);
        pageResult.setList(dqpcxListVoList);
        return ServerResponse.createBySuccess(pageResult);
    }
    private DqpcxListVo assembleDqpcxListVo(Dqpcx dqpcx){
        DqpcxListVo dqpcxListVo = new DqpcxListVo();
        dqpcxListVo.setId(dqpcx.getId());
        dqpcxListVo.setKsszd(dqpcx.getKsszd());
        dqpcxListVo.setNf(dqpcx.getNf());
        dqpcxListVo.setPcmc(dqpcx.getPcmc());
        dqpcxListVo.setWlfk(dqpcx.getWlfk());
        dqpcxListVo.setZdkzfsx(dqpcx.getZdkzfsx());
        return dqpcxListVo;
    }
    public ServerResponse<PageInfo> getDqpcxListkezsd(int pageNum, int pageSize,String zsd,String kelei,String pcmc){
        PageHelper.startPage(pageNum,pageSize);
        List<dqpc> dqpcxListzsd = dqpcxMapper.getDqpcxListkezsd(zsd,kelei,pcmc);
//        List<DqpcxListVo> dqpcxListVoList = Lists.newArrayList();
//        for(dqpc dqpcxItem : dqpcxListzsd){
//            DqpcxListVo dqpcxListVo = assembleDqpcxListVo(dqpcxItem);
//            dqpcxListVoList.add(dqpcxListVo);
//        }
        PageInfo pageResult = new PageInfo(dqpcxListzsd);
        pageResult.setList(dqpcxListzsd);
        return ServerResponse.createBySuccess(pageResult);
    }
}
