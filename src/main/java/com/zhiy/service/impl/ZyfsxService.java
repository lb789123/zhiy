package com.zhiy.service.impl;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.google.common.collect.Lists;
import com.zhiy.common.Const;
import com.zhiy.common.ServerResponse;
import com.zhiy.common.TokenCache;
import com.zhiy.dao.ZyfsxMapper;
import com.zhiy.pojo.Zyfsx;
import com.zhiy.service.IZyfsxService;
import com.zhiy.util.MD5Util;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.zhiy.vo.ZyfsxListVo;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
/**
 * Created by bu
 */
@Service("iZyfsxService")
public class ZyfsxService implements IZyfsxService {
    @Autowired
    ZyfsxMapper zyfsxMapper;

    @Override
    public ServerResponse<PageInfo> getzyList(int pageNum, int pageSize,String ksdq,String gxmc,String kb,String pc){
        PageHelper.startPage(pageNum,pageSize);
        if(kb==null){
            List<Zyfsx> zyfsxList = zyfsxMapper.gezyList1(ksdq,gxmc,pc);
            List<ZyfsxListVo> zyfsxListVoList = Lists.newArrayList();
            for(Zyfsx zyfsxItem : zyfsxList){
                ZyfsxListVo zyfsxListVo = assembleZyfsxListVo(zyfsxItem);
                zyfsxListVoList.add(zyfsxListVo);
            }
            PageInfo pageResult = new PageInfo(zyfsxList);
            pageResult.setList(zyfsxListVoList);
            return ServerResponse.createBySuccess(pageResult);
        }
        else{
            List<Zyfsx> zyfsxList = zyfsxMapper.gezyList(ksdq,gxmc,kb,pc);
            List<ZyfsxListVo> zyfsxListVoList = Lists.newArrayList();
            for(Zyfsx zyfsxItem : zyfsxList){
                ZyfsxListVo zyfsxListVo = assembleZyfsxListVo(zyfsxItem);
                zyfsxListVoList.add(zyfsxListVo);
            }
            PageInfo pageResult = new PageInfo(zyfsxList);
            pageResult.setList(zyfsxListVoList);
            return ServerResponse.createBySuccess(pageResult);
        }
    }
    @Override
    public ServerResponse<PageInfo> getzyfsxList(int pageNum, int pageSize,String ksdq,String gxmc,String kb,String pc,String zymc){
        PageHelper.startPage(pageNum,pageSize);
            List<Zyfsx> zyfsxList = zyfsxMapper.gezyfsList(ksdq,gxmc,kb,pc,zymc);
            List<ZyfsxListVo> zyfsxListVoList = Lists.newArrayList();
            for(Zyfsx zyfsxItem : zyfsxList){
                ZyfsxListVo zyfsxListVo = assembleZyfsxListVo(zyfsxItem);
                zyfsxListVoList.add(zyfsxListVo);
            }
            PageInfo pageResult = new PageInfo(zyfsxList);
            pageResult.setList(zyfsxListVoList);
            return ServerResponse.createBySuccess(pageResult);
    }
    private ZyfsxListVo assembleZyfsxListVo(Zyfsx zyfsx){
        ZyfsxListVo zyfsxListVo = new ZyfsxListVo();
        zyfsxListVo.setId(zyfsx.getId());
        zyfsxListVo.setGxmc(zyfsx.getGxmc());
        zyfsxListVo.setNf(zyfsx.getNf());
        zyfsxListVo.setKsdq(zyfsx.getKsdq());
        zyfsxListVo.setZymc(zyfsx.getZymc());
        zyfsxListVo.setZgf(zyfsx.getZgf());
        zyfsxListVo.setKb(zyfsx.getKb());
        zyfsxListVo.setPc(zyfsx.getPc());
        zyfsxListVo.setPjf(zyfsx.getPjf());

        return zyfsxListVo;
    }
}
