package com.zhiy.service.impl;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.google.common.collect.Lists;
import com.zhiy.common.ServerResponse;
import com.zhiy.dao.BklstdxxbMapper;
import com.zhiy.dao.GxxxbMapper;
import com.zhiy.dao.SchoolMapper;
import com.zhiy.pojo.Bklstdxxb;
import com.zhiy.pojo.School;
import com.zhiy.pojo.Gxxxb;
import com.zhiy.service.IBklstdxxbService;
import com.zhiy.vo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.lang.Math.abs;

/**
 * Created by bu
 */
@Service("iBklstdxxbService")
public class BklstdxxbService implements IBklstdxxbService  {

    @Autowired
    BklstdxxbMapper bklstdxxbMapper;
    @Autowired
    GxxxbMapper gxxxbMapper;
    @Autowired
    SchoolMapper schoolMapper;
    @Override
    public ServerResponse<PageInfo> getBklstdxxbList(int pageNum, int pageSize,String zssf,String gxxm,String zskl,String zspc){
        PageHelper.startPage(pageNum,pageSize);
        if(zskl==null){
            List<Bklstdxxb> bklstdxxbList = bklstdxxbMapper.getBklstdxxbListwkl(zssf,gxxm,zspc);
            List<BklstdxxbListVo> bklstdxxbListVoList = Lists.newArrayList();
            for(Bklstdxxb bklstdxxbItem : bklstdxxbList){
                BklstdxxbListVo bklstdxxbListVo = assembleBklstdxxbListVo(bklstdxxbItem);
                bklstdxxbListVoList.add(bklstdxxbListVo);
            }
            PageInfo pageResult = new PageInfo(bklstdxxbList);
            pageResult.setList(bklstdxxbListVoList);
            return ServerResponse.createBySuccess(pageResult);
        }
        else{
            List<Bklstdxxb> bklstdxxbList = bklstdxxbMapper.getBklstdxxbList(zssf,gxxm,zskl,zspc);
            List<BklstdxxbListVo> bklstdxxbListVoList = Lists.newArrayList();
            for(Bklstdxxb bklstdxxbItem : bklstdxxbList){
                BklstdxxbListVo bklstdxxbListVo = assembleBklstdxxbListVo(bklstdxxbItem);
                bklstdxxbListVoList.add(bklstdxxbListVo);
            }
            PageInfo pageResult = new PageInfo(bklstdxxbList);
            pageResult.setList(bklstdxxbListVoList);
            return ServerResponse.createBySuccess(pageResult);
        }
    }
    private BklstdxxbListVo assembleBklstdxxbListVo(Bklstdxxb bklstdxxb){
        BklstdxxbListVo bklstdxxbListVo = new BklstdxxbListVo();
        bklstdxxbListVo.setId(bklstdxxb.getId());
        bklstdxxbListVo.setGxxm(bklstdxxb.getGxxm());
        bklstdxxbListVo.setNf(bklstdxxb.getNf());
        bklstdxxbListVo.setZssf(bklstdxxb.getZssf());
        bklstdxxbListVo.setZskl(bklstdxxb.getZskl());
        bklstdxxbListVo.setZspc(bklstdxxb.getZspc());
        bklstdxxbListVo.setLqzdf(bklstdxxb.getLqzdf());
        bklstdxxbListVo.setLqpjf(bklstdxxb.getLqpjf());
        bklstdxxbListVo.setLqzgf(bklstdxxb.getLqzgf());

        return bklstdxxbListVo;
    }
    @Override
    public ServerResponse<PageInfo> chaxun(int pageNum, int pageSize,String skx,String ksfs,String zssf,String zskl,String zspc){
        PageHelper.startPage(pageNum,pageSize);
        int SKX;
        int KSFS;
        try{
            SKX =Integer.parseInt(skx);
        }catch(NumberFormatException e) {
            SKX =0;
        }
        try{
            KSFS =Integer.parseInt(ksfs);
        }catch(NumberFormatException e) {
            KSFS =0;
        }
        int fencha=KSFS-SKX;//计算得到考生分差
        int fenshucha;
        int j=0;
        int ZDF;
        List<Bklstdxxb> bklstdxxbList = bklstdxxbMapper.getBklstdxxbList1(zssf,zskl,zspc);
        List<BklstdxxbListVo> bklstdxxbListVoList = Lists.newArrayList();
        List<BklstdxxbListVo> bklstdxxbListVoList1 = Lists.newArrayList();
        List<chaxunvo> bklstdxxbListVoList11 = Lists.newArrayList();
        List<chaxunvo> bklstdxxbListVoList2 = Lists.newArrayList();
            for(Bklstdxxb bklstdxxbItem : bklstdxxbList){
//                //找出近三年的湖北省录取的学校
////                System.out.println(bklstdxxbItem.getNf());
////                String nf=String.valueOf(2017);
////                if((Integer.parseInt(bklstdxxbItem.getNf())==2016)||((Integer.parseInt(bklstdxxbItem.getNf()))==2017)||((Integer.parseInt(bklstdxxbItem.getNf())==2018)))
                        BklstdxxbListVo bklstdxxbListVo1 = assembleBklstdxxbListVo(bklstdxxbItem);
                        bklstdxxbListVoList.add(bklstdxxbListVo1);
            }
        for(Bklstdxxb bklstdxxbItem2 : bklstdxxbList){
            //将三年的学校合并
           String zdf=bklstdxxbItem2.getLqzdf();
           if(zdf.equals(null)){
//               BklstdxxbListVo bklstdxxbListVo=new BklstdxxbListVo();
//               bklstdxxbListVo.setId(bklstdxxbItem2.getId());
//               bklstdxxbListVo.setGxxm(bklstdxxbItem2.getGxxm());
//               bklstdxxbListVo.setNf(bklstdxxbItem2.getNf());
//               bklstdxxbListVo.setZssf(bklstdxxbItem2.getZssf());
//               bklstdxxbListVo.setZskl(bklstdxxbItem2.getZskl());
//               bklstdxxbListVo.setZspc(bklstdxxbItem2.getZspc());
//               bklstdxxbListVo.setLqzdf(bklstdxxbItem2.getLqzdf());
//               bklstdxxbListVo.setLqpjf(bklstdxxbItem2.getLqpjf());
//               bklstdxxbListVo.setLqzgf(bklstdxxbItem2.getLqzgf());
//               bklstdxxbListVoList1.add(bklstdxxbListVo);
           }else{
               try{
                   ZDF =Integer.parseInt(zdf);
               }catch(NumberFormatException e) {
                   ZDF =0;
               }
               if("2018".equals(bklstdxxbItem2.getNf()))
                   fenshucha=ZDF-512;
               else
                   if("2017".equals(bklstdxxbItem2.getNf()))
                       fenshucha=ZDF-484;
                   else
                       if("2016".equals(bklstdxxbItem2.getNf()))
                       fenshucha=ZDF-512;
                       else
                           fenshucha=ZDF-510;
                   //在 10-考生分差-5分之间
               Gxxxb ts=new Gxxxb();
               int i=gxxxbMapper.checkGxxm(bklstdxxbItem2.getGxxm());
               if(i==0){
                   ts.setTs(" ");
               }
               else{
               ts=gxxxbMapper.getTs(bklstdxxbItem2.getGxxm());
               if(ts.getTs().equals("211985"))
               {
                   ts.setTs("985，211");
               }
               }
               if((fencha-10)>fenshucha||(fencha+5)>fenshucha){
                        chaxunvo bklstdxxbListVo=new chaxunvo();
                        bklstdxxbListVo.setId(bklstdxxbItem2.getId());
                        bklstdxxbListVo.setGxxm(bklstdxxbItem2.getGxxm());
                        bklstdxxbListVo.setNf(bklstdxxbItem2.getNf());
                        bklstdxxbListVo.setZssf(bklstdxxbItem2.getZssf());
                        bklstdxxbListVo.setZskl(bklstdxxbItem2.getZskl());
                        bklstdxxbListVo.setZspc(bklstdxxbItem2.getZspc());
                        bklstdxxbListVo.setLqzdf(bklstdxxbItem2.getLqzdf());
                        bklstdxxbListVo.setFencha(String.valueOf(fenshucha));
                        bklstdxxbListVo.setTs(ts.getTs());
                        bklstdxxbListVoList11.add(bklstdxxbListVo);
                    }
               ZDF=0;
               fenshucha=0;
           }
}
        //去掉相同的学校
        for(chaxunvo bklstdxxbItem1 : bklstdxxbListVoList11) {
//            for (chaxunvo bklstdxxbItem3 : bklstdxxbListVoList2) {
//                if (bklstdxxbItem3.getGxxm().equals(bklstdxxbItem1.getGxxm()))
//                    j++;
//            }
//            System.out.println(j);
            int k=Integer.parseInt(bklstdxxbItem1.getFencha());
            System.out.println(k);
            if(j==0){
                chaxunvo bklstdxxbListVo=new chaxunvo();
                bklstdxxbListVo.setId(bklstdxxbItem1.getId());
                bklstdxxbListVo.setGxxm(bklstdxxbItem1.getGxxm());
                bklstdxxbListVo.setNf(bklstdxxbItem1.getNf());
                bklstdxxbListVo.setZssf(bklstdxxbItem1.getZssf());
                bklstdxxbListVo.setZskl(bklstdxxbItem1.getZskl());
                bklstdxxbListVo.setZspc(bklstdxxbItem1.getZspc());
                bklstdxxbListVo.setLqzdf(bklstdxxbItem1.getLqzdf());
                bklstdxxbListVo.setFencha(bklstdxxbItem1.getFencha());
                bklstdxxbListVo.setTs(bklstdxxbItem1.getTs());
                bklstdxxbListVoList2.add(bklstdxxbListVo);
            }
            j=0;
        }
        PageInfo pageResult = new PageInfo(bklstdxxbListVoList2);
        pageResult.setList(bklstdxxbListVoList2);
        return ServerResponse.createBySuccess(pageResult);
    }
    @Override
    public ServerResponse<PageInfo> chaxunschool(int pageNum, int pageSize,String skx,String ksfs,String zssf,String zskl,String zspc){
        PageHelper.startPage(pageNum,pageSize);
        zssf="湖北省";
        zskl="理科";
        zspc="第一批";
        //        查找所有学校->把有的学校挨个找分数，求平均分差->与考生对比，符合的输出
        //从第一个开始，分数线+考生分差与学校录取分数相比，差不多就输出
//        只找20所，找到就结尾。
        int num=20;
        int ksfss=Integer.parseInt(ksfs);
        int skxx=Integer.parseInt(skx);
        int fencha=ksfss-skxx;//计算得到考生分差
        int fenshucha;//录取分差
        int schoolnum=22222422;
        int j=0;//计数
        int zdf=0;//最低分判断
        int k=0;// 判断重复
        int fen;
//        String []school=new String[num];
        bklstdxxblist<Gxxbvo> list = new bklstdxxblist();//创建单向列表对象
        List<Bklstdxxb> bklstdxxbList = bklstdxxbMapper.checkzssf(zssf,zskl,zspc);
        for(Bklstdxxb temp : bklstdxxbList) {
            System.out.println(temp.getGxxm() + temp.getNf());
//            if(temp.getLqzdf().equals(null))
            boolean a= temp.getLqzdf().equals(null);
            if (a==false)
                zdf = Integer.parseInt(temp.getLqzdf());
            else
                if (temp.getLqpjf().equals(null))
                    zdf = 0;
                else
                    zdf = Integer.parseInt(temp.getLqpjf());
            System.out.println(temp.getGxxm() + temp.getNf() + "最低分" + zdf);
//            int zdf=Integer.parseInt(temp.getLqzdf());
            {if("2018".equals(temp.getNf()))
            {   fen=512;
                fenshucha=zdf-fen;
                System.out.println("512"+"---"+abs(fencha-fenshucha));}
            else
                if("2017".equals(temp.getNf()))
                {    fen=484;
                fenshucha=zdf-484;
                System.out.println("484"+"---"+abs(fencha-fenshucha));
                }
                else
                    if("2016".equals(temp.getNf())) { fen=512;fenshucha=zdf-512;System.out.println("512"+"---"+abs(fencha-fenshucha));}
                    else {fen=510;fenshucha=zdf-510;System.out.println("510"+"---"+abs(fencha-fenshucha)); }
            }
            if(abs(fencha-fenshucha)<=num){
                //将学校放入到查询好的链表中，然后输出
                int i=gxxxbMapper.checkGxxm(temp.getGxxm());
                int s=schoolMapper.checkschool(temp.getGxxm());
                if(1==i){
                    System.out.println(i+temp.getGxxm());
                    Gxxxb schools=gxxxbMapper.selectbygxxm(temp.getGxxm());
                    Gxxbvo un=new Gxxbvo(schools,abs(fencha-fenshucha));
                    if(s==1){
                        School school =schoolMapper.selectbyschool(temp.getGxxm());
                        if(0==Integer.parseInt(school.getJiu())){
                            if(0==Integer.parseInt(school.getEr())){
                                un.setTs(school.getShuang());
                            }
                            else un.setTs("211"+" "+school.getShuang());
                        }
                        else un.setTs("985"+" "+"211"+" "+school.getShuang());
                    }
                    else un.setTs(" ");
                list.add(un);
                System.out.println();
                System.out.println("添加后链表的Size为："+list.size());
                System.out.println();
                }
            }
            fenshucha=0;
            zdf=0;//重新记为0
        }
//        List<Gxxxb> gxxxbListclass = Lists.newArrayList();
        List<Object> gxxxbListVoList = Lists.newArrayList();
        for(int z=0;z<list.size();z++){
            Object gxxxbListVo=list.get(z);
            gxxxbListVoList.add(gxxxbListVo);
        }
        PageInfo pageResult = new PageInfo(gxxxbListVoList);
        pageResult.setList(gxxxbListVoList);
        return ServerResponse.createBySuccess(pageResult);
    }

    public GxxxbListVo assembleGxxxbListVo(Gxxxb gxxxb){
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
}