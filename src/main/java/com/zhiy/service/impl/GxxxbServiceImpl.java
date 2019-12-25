package com.zhiy.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.google.common.collect.Lists;
import com.zhiy.common.Const;
import com.zhiy.common.ServerResponse;
import com.zhiy.common.TokenCache;
import com.zhiy.dao.GxxxbMapper;
import com.zhiy.dao.SchoolMapper;
import com.zhiy.pojo.Gxxxb;
import com.zhiy.pojo.School;
import com.zhiy.service.IGxxxbService;
import com.zhiy.util.MD5Util;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.zhiy.vo.GxxxbListVo;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
/**
 * Created by bu
 */
@Service("iGxxxbService")
public class GxxxbServiceImpl  implements IGxxxbService {

    @Autowired
    GxxxbMapper gxxxbMapper;
    @Autowired
    SchoolMapper schoolMapper;
//    @Override
//    public ServerResponse<Gxxxb> Showgxxx(String Gxdm){
//        int resultCount = gxxxbMapper.checkGxdm(Gxdm);
//        if(resultCount == 0 ){
//            return ServerResponse.createByErrorMessage("学校代码不存在");
//        }
//        Gxxxb gxxxb  = gxxxbMapper.selectgxxm(Gxdm);
//        return ServerResponse.createBySuccess("查找成功",gxxxb);
//    }
//    @Override
//    public ServerResponse<String> selectgxname(String Gxdm){
//        int resultCount = gxxxbMapper.checkGxdm(Gxdm);
//        if(resultCount == 0 ){
//            return ServerResponse.createByErrorMessage("学校代码不存在");
//        }
//        Gxxxb xm  = gxxxbMapper.selectbygxxm(Gxdm);
//        return ServerResponse.createBySuccess("查找成功",xm.getGxxm());
//    }

    @Override
    public ServerResponse<Gxxxb> selectgxtydm(String Gxxm){
        int resultCount = gxxxbMapper.checkGxxm(Gxxm);
        if(resultCount == 0 ){
            return ServerResponse.createByErrorMessage("学校名不存在");
        }
        Gxxxb school  = gxxxbMapper.selectbygxxm(Gxxm);
        return ServerResponse.createBySuccess("查找成功",school);
    }
    @Override
    public ServerResponse<PageInfo> getGxxxbList(int pageNum, int pageSize){
        //startPage--start
        //填充自己的sql查询逻辑
        //pageHelper-收尾
        PageHelper.startPage(pageNum,pageSize);
        System.out.println("GxxxbServiceImpl");
        List<Gxxxb> gxxxbList = gxxxbMapper.selectList();
        List<GxxxbListVo> gxxxbListVoList = Lists.newArrayList();
        for(Gxxxb gxxxbItem : gxxxbList){
            GxxxbListVo gxxxbListVo = assembleGxxxbListVo(gxxxbItem);
            gxxxbListVoList.add(gxxxbListVo);
        }
        PageInfo pageResult = new PageInfo(gxxxbList);
        pageResult.setList(gxxxbListVoList);
        return ServerResponse.createBySuccess(pageResult);
    }
    private GxxxbListVo assembleGxxxbListVo(Gxxxb gxxxb){
        GxxxbListVo gxxxbListVo = new GxxxbListVo();
        gxxxbListVo.setGxxm(gxxxb.getGxxm());
        gxxxbListVo.setJd(gxxxb.getJd());
        gxxxbListVo.setWd(gxxxb.getWd());
        gxxxbListVo.setWz(gxxxb.getWz());
        gxxxbListVo.setSzd(gxxxb.getSzd());
        gxxxbListVo.setTs(gxxxb.getTs());
        gxxxbListVo.setZs(gxxxb.getZs());
        gxxxbListVo.setTb(gxxxb.getTb());
        return gxxxbListVo;
    }
    @Override
    public ServerResponse<PageInfo> getGxxxbListclass(int pageNum, int pageSize,String leibie){
        PageHelper.startPage(pageNum,pageSize);
        List<Gxxxb> gxxxbListclass = gxxxbMapper.getGxxxbListclass(leibie);
        List<GxxxbListVo> gxxxbListVoList = Lists.newArrayList();
        for(Gxxxb gxxxbItem : gxxxbListclass){
            GxxxbListVo gxxxbListVo = assembleGxxxbListVo(gxxxbItem);
            gxxxbListVoList.add(gxxxbListVo);
        }
        PageInfo pageResult = new PageInfo(gxxxbListclass);
        pageResult.setList(gxxxbListVoList);
        return ServerResponse.createBySuccess(pageResult);
    }
    @Override
    public ServerResponse<PageInfo> getGxxxbListzsd(int pageNum, int pageSize,String zsd){
        PageHelper.startPage(pageNum,pageSize);
        List<Gxxxb> gxxxbListzsd = gxxxbMapper.getGxxxbListzsd(zsd);
        List<GxxxbListVo> gxxxbListVoList = Lists.newArrayList();
        for(Gxxxb gxxxbItem : gxxxbListzsd){
            GxxxbListVo gxxxbListVo = assembleGxxxbListVo(gxxxbItem);
            gxxxbListVoList.add(gxxxbListVo);
        }
        PageInfo pageResult = new PageInfo(gxxxbListzsd);
        pageResult.setList(gxxxbListVoList);
        return ServerResponse.createBySuccess(pageResult);
    }
    @Override
    public ServerResponse<PageInfo> getSchoolclass(int pageNum, int pageSize,String ts){
        PageHelper.startPage(pageNum,pageSize);
        List<Gxxxb> gxxxbListzsd=Lists.newArrayList();
        List<School> schools =schoolMapper.selectbyshuang(ts);
        for(School school : schools){
            int s=gxxxbMapper.checkGxxm(school.getSchool());
            if(s==1){
                Gxxxb gxxxb =gxxxbMapper.selectbygxxm(school.getSchool());
                if(0==Integer.parseInt(school.getJiu())){
                    if(0==Integer.parseInt(school.getEr())){
                        gxxxb.setTs(school.getShuang());
                    }
                    else gxxxb.setTs("211"+" "+school.getShuang());
                }
                else gxxxb.setTs("985"+" "+"211"+" "+school.getShuang());
                gxxxbListzsd.add(gxxxb);
            }
        }
        List<GxxxbListVo> gxxxbListVoList = Lists.newArrayList();
        for(Gxxxb gxxxbItem : gxxxbListzsd){
            GxxxbListVo gxxxbListVo = assembleGxxxbListVo(gxxxbItem);
            gxxxbListVoList.add(gxxxbListVo);
        }
        PageInfo pageResult = new PageInfo(gxxxbListzsd);
        pageResult.setList(gxxxbListVoList);
        return ServerResponse.createBySuccess(pageResult);
    }
    @Override
    public ServerResponse<PageInfo> getSchoolclassjiu(int pageNum, int pageSize){
        PageHelper.startPage(pageNum,pageSize);
        List<Gxxxb> gxxxbListzsd=Lists.newArrayList();
        List<School> schools =schoolMapper.selectbyjiu();
        for(School school : schools){
            int s=gxxxbMapper.checkGxxm(school.getSchool());
            if(s==1){
                Gxxxb gxxxb =gxxxbMapper.selectbygxxm(school.getSchool());
                if(0==Integer.parseInt(school.getJiu())){
                    if(0==Integer.parseInt(school.getEr())){
                        gxxxb.setTs(school.getShuang());
                    }
                    else gxxxb.setTs("211"+" "+school.getShuang());
                }
                else gxxxb.setTs("985"+" "+"211"+" "+school.getShuang());
                gxxxbListzsd.add(gxxxb);
            }
        }
        List<GxxxbListVo> gxxxbListVoList = Lists.newArrayList();
        for(Gxxxb gxxxbItem : gxxxbListzsd){
            GxxxbListVo gxxxbListVo = assembleGxxxbListVo(gxxxbItem);
            gxxxbListVoList.add(gxxxbListVo);
        }
        PageInfo pageResult = new PageInfo(gxxxbListzsd);
        pageResult.setList(gxxxbListVoList);
        return ServerResponse.createBySuccess(pageResult);
    }
    @Override
    public ServerResponse<PageInfo> getSchoolclasser(int pageNum, int pageSize){
        PageHelper.startPage(pageNum,pageSize);
        List<Gxxxb> gxxxbListzsd=Lists.newArrayList();
        List<School> schools =schoolMapper.selectbyer();
        for(School school : schools){
            int s=gxxxbMapper.checkGxxm(school.getSchool());
            if(s==1){
                Gxxxb gxxxb =gxxxbMapper.selectbygxxm(school.getSchool());
                if(0==Integer.parseInt(school.getJiu())){
                    if(0==Integer.parseInt(school.getEr())){
                        gxxxb.setTs(school.getShuang());
                    }
                    else gxxxb.setTs("211"+" "+school.getShuang());
                }
                else gxxxb.setTs("985"+" "+"211"+" "+school.getShuang());
                gxxxbListzsd.add(gxxxb);
            }
        }
        List<GxxxbListVo> gxxxbListVoList = Lists.newArrayList();
        for(Gxxxb gxxxbItem : gxxxbListzsd){
            GxxxbListVo gxxxbListVo = assembleGxxxbListVo(gxxxbItem);
            gxxxbListVoList.add(gxxxbListVo);
        }
        PageInfo pageResult = new PageInfo(gxxxbListzsd);
        pageResult.setList(gxxxbListVoList);
        return ServerResponse.createBySuccess(pageResult);
    }

}
