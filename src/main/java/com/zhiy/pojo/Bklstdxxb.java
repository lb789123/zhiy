package com.zhiy.pojo;

public class Bklstdxxb {
    private String id;

    private String gxxm;

    private String zssf;

    private String nf;

    private String zskl;

    private String zspc;

    private String lqzdf;

    private String lqpjf;

    private String lqzgf;

    public Bklstdxxb(String id, String gxxm, String zssf, String nf, String zskl, String zspc, String lqzdf, String lqpjf, String lqzgf) {
        this.id = id;
        this.gxxm = gxxm;
        this.zssf = zssf;
        this.nf = nf;
        this.zskl = zskl;
        this.zspc = zspc;
        this.lqzdf = lqzdf;
        this.lqpjf = lqpjf;
        this.lqzgf = lqzgf;
    }

    public Bklstdxxb() {
        super();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getGxxm() {
        return gxxm;
    }

    public void setGxxm(String gxxm) {
        this.gxxm = gxxm == null ? null : gxxm.trim();
    }

    public String getZssf() {
        return zssf;
    }

    public void setZssf(String zssf) {
        this.zssf = zssf == null ? null : zssf.trim();
    }

    public String getNf() {
        return nf;
    }

    public void setNf(String nf) {
        this.nf = nf == null ? null : nf.trim();
    }

    public String getZskl() {
        return zskl;
    }

    public void setZskl(String zskl) {
        this.zskl = zskl == null ? null : zskl.trim();
    }

    public String getZspc() {
        return zspc;
    }

    public void setZspc(String zspc) {
        this.zspc = zspc == null ? null : zspc.trim();
    }

    public String getLqzdf() {
        return lqzdf;
    }

    public void setLqzdf(String lqzdf) {
        this.lqzdf = lqzdf == null ? null : lqzdf.trim();
    }

    public String getLqpjf() {
        return lqpjf;
    }

    public void setLqpjf(String lqpjf) {
        this.lqpjf = lqpjf == null ? null : lqpjf.trim();
    }

    public String getLqzgf() {
        return lqzgf;
    }

    public void setLqzgf(String lqzgf) {
        this.lqzgf = lqzgf == null ? null : lqzgf.trim();
    }
}